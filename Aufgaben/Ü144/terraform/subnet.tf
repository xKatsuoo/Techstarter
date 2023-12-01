# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet
resource "aws_subnet" "subnet_a" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = local.cidr_a
  availability_zone       = local.az_a
  map_public_ip_on_launch = true # Wir wollen, dass die Instanzen eine öffentliche IP bekommen

  tags = {
    Name = "u144 Subnet A"
  }
}