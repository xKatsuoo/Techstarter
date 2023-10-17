terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region  = "eu-central-1"
  profile = "JasonT"
}

# Create EC2 Instance
resource "aws_instance" "web" {
  ami           = "ami-04e601abe3e1a910f"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}
