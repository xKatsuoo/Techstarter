output "ec2_Jenkins" {
  value = ["${aws_instance.Ü144-Jenkins.*.public_ip}"]
}

output "ec2_slave1" {
  value = ["${aws_instance.Ü144-Slave1.*.public_ip}"]
}