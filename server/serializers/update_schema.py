from app import ma
from models.update_model import Update
from marshmallow import fields

class UpdateSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Update
        load_instance = True
    
    fund = fields.Nested('FundSchema')
    