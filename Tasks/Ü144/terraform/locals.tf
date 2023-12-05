# Alle Locals werden innerhalb des locals Block definiert
locals {
  az_a = "${var.region}a" # eu-central-1a


  cidr_a = "10.0.1.0/24"
}