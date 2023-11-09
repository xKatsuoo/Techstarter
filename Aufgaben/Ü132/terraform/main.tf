# Alle Locals werden innerhalb des locals Block definiert
# Locals
locals {
  az_a   = "${var.region}a" # eu-central-1a
  az_b   = "${var.region}b" # eu-central-1b
  cidr_a = "10.0.1.0/24"
  cidr_b = "10.0.2.0/24"
}

# VPC 
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "U132 VPC"
  }
}

# Subnet
resource "aws_subnet" "subnet_a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = local.cidr_a
  availability_zone       = local.az_a
  map_public_ip_on_launch = true # Wir wollen, dass die Instanzen eine öffentliche IP bekommen

  tags = {
    Name = "U132 Subnet A"
  }
}

resource "aws_subnet" "subnet_b" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = local.cidr_b
  availability_zone       = local.az_b
  map_public_ip_on_launch = true # Wir wollen, dass die Instanzen eine öffentliche IP bekommen

  tags = {
    Name = "U132 Subnet B"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "U132 Internet Gateway"
  }
}

#Route Table
resource "aws_route_table" "rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"                 # Das gesamte Internet
    gateway_id = aws_internet_gateway.igw.id # Link zu unserem erstellten Internet Gateway
  }

  tags = {
    Name = "U132 Route Table"
  }
}

#RT association
resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.subnet_a.id
  route_table_id = aws_route_table.rt.id
}

resource "aws_route_table_association" "b" {
  subnet_id      = aws_subnet.subnet_b.id
  route_table_id = aws_route_table.rt.id
}

# Security Group
resource "aws_security_group" "sg" {
  name        = "u132_sg"
  description = "Allow SSH inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP from VPC"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH from VPC"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Grafana from VPC"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Prometheus from VPC"
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Prometheus from VPC"
    from_port   = 9100
    to_port     = 9100
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

#EC2
resource "aws_instance" "test-a" {
  ami                    = "ami-06dd92ecc74fdfb36"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnet_a.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "ubuntu-budgie"

  tags = {
    Name = "U132 EC2"

  }
}

resource "aws_instance" "test-b" {
  ami                    = "ami-06dd92ecc74fdfb36"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnet_b.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "ubuntu-budgie"

  tags = {
    Name = "U132 EC2"

  }
}

resource "aws_instance" "test-db" {
  ami                    = "ami-06dd92ecc74fdfb36"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnet_a.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "ubuntu-budgie"

  tags = {
    Name = "U132 EC2 DB"

  }
}

output "ec2_a_ip" {
  value = ["${aws_instance.test-a.*.public_ip}"]
}

output "ec2_b_ip" {
  value = ["${aws_instance.test-b.*.public_ip}"]
  
}

output "ec2_db_ip" {
  value = ["${aws_instance.test-db.*.public_ip}"]
  
}
