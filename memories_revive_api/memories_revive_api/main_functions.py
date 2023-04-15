import xmlrpc.client
import ssl

db = "edu-beerg1"
user = "t.petit@students.ephec.be"
password = "51803ef7159b9c648d78486aaf6f87c60631f373"
url = "https://edu-beerg1.odoo.com"

context = ssl.SSLContext()
common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url), context=context)
uid = common.authenticate(db, user, password, {})

models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url), context=context)


def odoo(model, action, list, dict=None):
    if not dict:
        return models.execute_kw(db, uid, password, model, action, list)
    return models.execute_kw(db, uid, password, model, action, list, dict)
