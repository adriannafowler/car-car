# Generated by Django 4.0.3 on 2023-10-23 23:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_customer_salesperson_employee_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.PositiveIntegerField()),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales', to='sales_rest.customer')),
                ('salesperson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales', to='sales_rest.salesperson')),
            ],
        ),
    ]