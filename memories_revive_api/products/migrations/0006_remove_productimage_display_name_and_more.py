# Generated by Django 4.1.7 on 2023-05-02 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_product_classic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productimage',
            name='display_name',
        ),
        migrations.RemoveField(
            model_name='productimage',
            name='video_url',
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='product_images/'),
        ),
    ]