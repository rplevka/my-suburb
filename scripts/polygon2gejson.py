#!/usr/bin/python

import json
from lxml import etree

with open('../data/crime/pokrsky.json', 'r') as file:
    okrsky = json.loads(file.read())
    file.close()

geojson = {
        u'type': 'FeatureCollection',
        u'features': []
        }
for ok in okrsky:
    geom = etree.fromstring(ok['Geometry'])
    coord = geom.xpath('//coordinates')[0].text.split(' ')
    coord = [[float(d),float(e)] for d,e in [c.split(',') for c in coord]]
    feature = {
            u'type': u'Feature',
            u'properties': {
                u'id': ok['id'],
                u'name': ok['Name']
                },
            u'geometry': {
                u'type': u'Polygon',
                u'coordinates': [
                    coord
                    ]
                },
            }
    geojson['features'].append(feature)

with open('../data/crime/krimi.geojson', 'w') as outfile:
    outfile.write(json.dumps(geojson))
    outfile.close()
