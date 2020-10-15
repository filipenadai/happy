import React, { useCallback, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import { happyMapIcon } from '../../utils/mapIcon';

import { Container, InputBlock, Main } from './styles';

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleSetMarker = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    setPosition({ latitude: lat, longitude: lng });
  }, []);

  return (
    <Container>
      <Sidebar />
      <Main>
        <form>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleSetMarker}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAP}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <input placeholder="Nome" id="name" />
            </InputBlock>

            <InputBlock>
              <textarea placeholder="Sobre" id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              {/* <div className="uploaded-image"></div> */}

              <button type="button" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <textarea placeholder="Instruções" id="instructions" />
            </InputBlock>

            <InputBlock>
              <input placeholder="Horário de abertura" id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </InputBlock>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
