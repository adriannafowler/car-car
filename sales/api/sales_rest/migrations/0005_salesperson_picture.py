# Generated by Django 4.0.3 on 2023-10-26 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_salesperson_employee_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='salesperson',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
