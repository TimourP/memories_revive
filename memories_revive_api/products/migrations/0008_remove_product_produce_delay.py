# Generated by Django 4.1.7 on 2023-05-25 09:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_alter_productimage_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='produce_delay',
        ),
    ]
