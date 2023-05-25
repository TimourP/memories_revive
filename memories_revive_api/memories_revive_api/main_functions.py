import xmlrpc.client
import ssl

db = "edu-lln-7"
user = "t.petit@students.ephec.be"
password = "05292436d05ef613e60074a65e76152111cfbb6a"
url = "https://edu-lln-7.odoo.com"

context = ssl.SSLContext()
common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url), context=context)
uid = common.authenticate(db, user, password, {})

models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url), context=context)


def odoo(model, action, list, dict=None):
    if not dict:
        return models.execute_kw(db, uid, password, model, action, list)
    return models.execute_kw(db, uid, password, model, action, list, dict)
