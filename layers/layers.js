ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([-91683.341819, 6145272.696802, 1375878.193282, 7020953.157767]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AmnagementhydrolectriquesFrance_1 = new ol.format.GeoJSON();
var features_AmnagementhydrolectriquesFrance_1 = format_AmnagementhydrolectriquesFrance_1.readFeatures(json_AmnagementhydrolectriquesFrance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_AmnagementhydrolectriquesFrance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmnagementhydrolectriquesFrance_1.addFeatures(features_AmnagementhydrolectriquesFrance_1);
var lyr_AmnagementhydrolectriquesFrance_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmnagementhydrolectriquesFrance_1, 
                style: style_AmnagementhydrolectriquesFrance_1,
                interactive: true,
                title: '<img src="styles/legend/AmnagementhydrolectriquesFrance_1.png" /> Aménagement hydroélectriques France'
            });
var format_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2 = new ol.format.GeoJSON();
var features_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2 = format_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.readFeatures(json_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.addFeatures(features_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2);
var lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2, 
                style: style_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2,
                interactive: true,
                title: '<img src="styles/legend/Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.png" /> Aménagements hydroélectriques d\'une puissance supèrieure à 500kW'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AmnagementhydrolectriquesFrance_1.setVisible(true);lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AmnagementhydrolectriquesFrance_1,lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2];
lyr_AmnagementhydrolectriquesFrance_1.set('fieldAliases', {'ROE': 'ROE', 'Nom': 'Nom', 'CE': 'CE', 'Bassin_hyd': 'Bassin_hyd', 'Commune': 'Commune', 'Departemen': 'Departemen', 'Region': 'Region', 'Nom2': 'Nom2', 'Entreprise': 'Entreprise', 'Puissance(': 'Puissance(', 'unite(mW)': 'unite(mW)', 'Hchute': 'Hchute', 'unite(m)': 'unite(m)', 'PMB_est': 'PMB_est', 'unite(kW)': 'unite(kW)', 'Pelec_est': 'Pelec_est', 'unite_P(kW': 'unite_P(kW', });
lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.set('fieldAliases', {'ROE': 'ROE', 'Nom': 'Nom', 'Cours_d_ea': 'Cours_d_ea', 'Bassin_hyd': 'Bassin_hyd', 'Commune': 'Commune', 'Departemen': 'Departemen', 'Region': 'Region', 'Hchute': 'Hchute', 'unite(m)': 'unite(m)', 'PMB_est': 'PMB_est', 'P': 'P', 'unite_Pele': 'unite_Pele', 'unite': 'unite', });
lyr_AmnagementhydrolectriquesFrance_1.set('fieldImages', {'ROE': 'TextEdit', 'Nom': 'TextEdit', 'CE': 'TextEdit', 'Bassin_hyd': 'TextEdit', 'Commune': 'TextEdit', 'Departemen': 'TextEdit', 'Region': 'TextEdit', 'Nom2': 'TextEdit', 'Entreprise': 'TextEdit', 'Puissance(': 'TextEdit', 'unite(mW)': 'TextEdit', 'Hchute': 'TextEdit', 'unite(m)': 'TextEdit', 'PMB_est': 'TextEdit', 'unite(kW)': 'TextEdit', 'Pelec_est': 'TextEdit', 'unite_P(kW': 'TextEdit', });
lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.set('fieldImages', {'ROE': 'TextEdit', 'Nom': 'TextEdit', 'Cours_d_ea': 'TextEdit', 'Bassin_hyd': 'TextEdit', 'Commune': 'TextEdit', 'Departemen': 'TextEdit', 'Region': 'TextEdit', 'Hchute': 'TextEdit', 'unite(m)': 'TextEdit', 'PMB_est': 'TextEdit', 'P': '', 'unite_Pele': 'TextEdit', 'unite': '', });
lyr_AmnagementhydrolectriquesFrance_1.set('fieldLabels', {'ROE': 'no label', 'Nom': 'no label', 'CE': 'no label', 'Bassin_hyd': 'no label', 'Commune': 'no label', 'Departemen': 'no label', 'Region': 'no label', 'Nom2': 'no label', 'Entreprise': 'no label', 'Puissance(': 'no label', 'unite(mW)': 'no label', 'Hchute': 'no label', 'unite(m)': 'no label', 'PMB_est': 'no label', 'unite(kW)': 'no label', 'Pelec_est': 'no label', 'unite_P(kW': 'no label', });
lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.set('fieldLabels', {'ROE': 'no label', 'Nom': 'no label', 'Cours_d_ea': 'no label', 'Bassin_hyd': 'no label', 'Commune': 'no label', 'Departemen': 'no label', 'Region': 'no label', 'Hchute': 'no label', 'unite(m)': 'no label', 'PMB_est': 'no label', 'P': 'no label', 'unite_Pele': 'no label', 'unite': 'no label', });
lyr_Amnagementshydrolectriquesdunepuissancesuprieure500kW_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});