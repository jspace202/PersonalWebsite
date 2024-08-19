import React, { useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { defaults as defaultControls } from 'ol/control';

function MapAPI() {
    useEffect(() => {
        const mousePositionControl = new MousePosition({
            coordinateFormat: createStringXY(4),
            projection: 'EPSG:4326',
        });

        const osmLayer = new TileLayer({
            source: new OSM(),
        });

        const map = new Map({
            controls: defaultControls().extend([mousePositionControl]),
            layers: [osmLayer],
            target: 'map',
            view: new View({
                center: [-10685943, 4321401],
                zoom: 9,
            }),
        });

        const projectionSelect = document.getElementById('projection');
        const precisionInput = document.getElementById('precision');

        if (projectionSelect) {
            projectionSelect.addEventListener('change', function (event) {
                mousePositionControl.setProjection(event.target.value);
            });
        }

        if (precisionInput) {
            precisionInput.addEventListener('change', function (event) {
                const format = createStringXY(event.target.valueAsNumber);
                mousePositionControl.setCoordinateFormat(format);
            });
        }

        return () => {
            map.setTarget(null);
            if (projectionSelect) {
                projectionSelect.removeEventListener('change', () => {});
            }
            if (precisionInput) {
                precisionInput.removeEventListener('change', () => {});
            }
        };
    }, []);

    return (
        <div className='MapAPIBanner'>
            <div id="map" className="MapAPI"/>
            <select id="projection">
                <option value="EPSG:4326">EPSG:4326</option>
                <option value="EPSG:3857">EPSG:3857</option>
            </select>
            <input id="precision" type="number" defaultValue={4} min={0} />
        </div>
    );
}

export default MapAPI;
