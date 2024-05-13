var wms_layers = [];

var lyr_Ortofotocolor2023provisional_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2023 (provisional)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2023provisional_0, 0]);
var format_positius_1 = new ol.format.GeoJSON();
var features_positius_1 = format_positius_1.readFeatures(json_positius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positius_1.addFeatures(features_positius_1);
var lyr_positius_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_positius_1, 
                style: style_positius_1,
                popuplayertitle: "positius",
                interactive: true,
                title: '<img src="styles/legend/positius_1.png" /> positius'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2023provisional_0,],
                                fold: "open",
                                title: "Mapas de fondo"});

lyr_Ortofotocolor2023provisional_0.setVisible(true);lyr_positius_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_positius_1];
lyr_positius_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'àrea': 'àrea', 'Referencia cadastral': 'Referencia cadastral', });
lyr_positius_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'àrea': '', 'Referencia cadastral': '', });
lyr_positius_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'no label', 'àrea': 'inline label - always visible', 'Referencia cadastral': 'inline label - always visible', });
lyr_positius_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});