# Generated by Django 5.0.3 on 2024-04-09 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_rename_user_bankuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankuser',
            name='accounts',
            field=models.JSONField(default=list),
        ),
    ]
