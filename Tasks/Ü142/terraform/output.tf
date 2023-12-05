output "ec2_global_ips" {
  value = ["${aws_instance.Ü142.*.public_ip}"]
}