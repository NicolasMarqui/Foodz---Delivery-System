# Generated by Django 2.2.4 on 2019-11-04 01:19

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0007_auto_20191103_2119'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificacao',
            name='data_comentario',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='notificacao',
            name='foi_lida',
            field=models.BooleanField(default=False),
        ),
    ]
