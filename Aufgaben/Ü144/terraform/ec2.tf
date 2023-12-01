# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance
resource "aws_instance" "Ü144-Jenkins" {

  ami                    = "ami-06dd92ecc74fdfb36"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnet_a.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "ubuntu-budgie"

  tags = {
    Name = "Ü144-Jenkins"
  }
}

resource "aws_instance" "Ü144-Slave1" {

  ami                    = "ami-06dd92ecc74fdfb36"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnet_a.id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "ubuntu-budgie"

  tags = {
    Name = "Ü144-Slave1"
  }
}

