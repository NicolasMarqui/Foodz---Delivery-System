# Generated by Django 2.2.4 on 2019-12-04 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0022_endereco_is_principal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endereco',
            name='numero',
            field=models.CharField(default='666', max_length=255),
        ),
    ]
