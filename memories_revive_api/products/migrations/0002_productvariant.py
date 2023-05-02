# Generated by Django 4.1.7 on 2023-05-02 10:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductVariant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list_price', models.FloatField()),
                ('odoo_id', models.IntegerField(default=0)),
                ('attributes_values', models.ManyToManyField(related_name='variants', to='products.productattributevalue')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='products.product')),
            ],
        ),
    ]