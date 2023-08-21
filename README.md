# BroadCastChannel-Demo-Ibk- - Librería para compartir estados entre aplicaciones

La clase BroadcastChannelIbk proporciona una forma sencilla de comunicar datos entre páginas o componentes en un navegador utilizando el API `BroadcastChannel`. Permite la suscripción, envío y eliminación de mensajes entre diferentes instancias de una aplicación.

## Instalación

No es necesario instalar nada para utilizar `BroadcastChannelIbk`, ya que es una clase de JavaScript estándar.

## Uso

Para comenzar a utilizar `BroadcastChannelIbk`, importa la clase en tu código:

```javascript
import BroadcastChannelIbk from './BroadcastChannelIbk'; // Asegúrate de que la ruta sea correcta

// Crear una instancia de BroadcastChannelIbk
const channelName = 'mi-canal'; // Nombre del canal de comunicación
const channel = new BroadcastChannelIbk(channelName);

// Agregar un oyente para un tipo de mensaje específico
channel.addListener('nuevo-mensaje', (data) => {
  console.log('Mensaje recibido:', data);
});

// Enviar un mensaje a través del canal
const mensaje = { texto: '¡Hola desde otro componente!' };
channel.sendMessage('nuevo-mensaje', mensaje);

// Eliminar un oyente
const miCallback = (data) => { /* ... */ };
channel.removeListener('nuevo-mensaje', miCallback);

// Cerrar el canal cuando ya no se necesite
channel.close();
```

## Construcción

    npm run build

## Pizza Owner

    Hernan Bracamonte 
     - https://www.linkedin.com/in/hernanbracamonte/
