![banner](https://i.ibb.co/4Zmv9vm/In-Shot-20190623-133409447.jpg)

# “LA LLAVE”, PROYECTO DE CIFRADO.

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla. Y es el cifrado que utilizaremos para el funcionamiento de "La Llave".

El cifrado césar es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto. Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:
- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.

## Resumen del proyecto

“La llave” es una plataforma web que permite cifrar y descifrar mensajes, los cuales pueden ser codificados en cinco tipos diferentes de offset (_en nuestro programa le llamaremos “llaves”_), el usuario debe ingresar el mensaje que quiere entregar y elegir un "offset o llave" para cifrar, el mensaje cifrado aparecerá en el mismo cuadro de texto donde se ingresó el mensaje.

Por otro lado, si la intención es descifrar un mensaje, se debe ingresa el mismo tal cual esta y elegir el offset o llave adecuado para poder descifrar. En caso de no conocer la llave con la cual fue cifrado, se debe probar con las cinco opciones (_1,5,7,11,15_). Para evitar esto, recomendamos siempre entregar el mensaje con su respectivo offset al destinatario.

## Definición del Producto y  perfil del Usuario.

El proyecto de cifrado "La Llave" esta creado para facilitar la realización de eventos privados dirigidos a un público especifico, respondiendo a la necesidad de organizarse y comunicarse entre las partes sin involucrarse de manera pública. Esta primera versión fue pensada para las Microcervecerías y Growler's naciones que necesitan publicitar sus productos pero no cuentan con la patente legal para ello, lo que los deja en la ilegalidad, arriesgándose a multas millonarias o clausuras de sus locales. La Llave, les da una plataforma segura para poder organizar eventos e invitar a un público especifico.

#### Quiénes son los principales usuarios de producto.
Consumidores frecuentes de las Microcerverías y Growler's nacionales, que son invitados personalmente por miembros de esta comunidad. Estos usuarios conocen el rubro y son clientes habituales, por lo cual se genera una red basada en el respeto y la confianza por el rubro.

#### Cuáles son los objetivos del producto hacia los usuarios.
- Los usuarios pueden acceder a una comunidad de eventos, catas y redes culinarias en base a la cerveza artesanal. La Llave no solo te abre la puerta de entrada, sino también te hace parte de algo: es comunidad y compañerismo.

#### Cómo el producto resuelve el problema.
- Fomentando la realización de eventos a nivel secreto, con un público acotado, informado y responsable. Da las herramientas para operar desde la tranquilidad tanto a los anfitriones como a los invitados.


## Instalación y Ejecución.

"La Llave" puede ser ejecutada desde cualquier navegador web o smartphones, no necesitas mayores requerimientos para su funcionamiento.

 1. Dirígete a la dirección web de la aplicación, puedes ingresar mediante este link ["La Llave".](https://ayma27.github.io/SCL010-Cipher/src/index.html)
 2. Ingresa, si ya tienes un mensaje cifrado por la opción "Ingresa", si por el contrario quieres cifrar (eres anfitrión) debes ingresar por la parte inferior "click".
 3. Codifica o Decodifica tu mensaje, luego confirma si puedes asistir o no al evento. En caso de no poder asistir, serás redirigido a la pantalla de despedida.
 4. Acepta las normas e indicaciones de la pagina. Si no aceptas serás redirigido a la pantalla de despedida.
 5. Ingresa tu email de contacto para que podamos contactarte con las indicaciones finales.
 6. Listo, serás enviado a la pantalla de despedida.


## Herramientas técnicas para su creación.

 - [x] La lógica del proyecto esta desarrollado completamente en JavaScript (ES6). [Vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
 - [x]  En este proyecto NO usa librerías o frameworks.
 - [x] Sus tests unitarios cubren un 100% de _statements_, _functions_
y _lines_, y un 100% de _branches_. Estos estan incluidos en el boilerplate.


## Prototipado del proyecto
Para comenzar a crear el proyecto, previamente se realizaron prototipados de baja calidad. En primer lugar se dibujo el control de flujo que tendría el programa y un primer scketch en papel de como se verían sus pantallas. Luego de presentar esta idea a posibles usuarios y recibir feedback se realizó un segundo scketch solucionando los problemas de flujo encontrados en el prototipado inicial. Para terminar finalmente con un wireframe de como se vería el producto final realizado en Figma.

### Control de flujo y Scketch (1)
![enter image description here](https://i.ibb.co/Q8XqpCg/IMG-20190623-130405-1.jpg)

### Scketch(2)
![enter image description here](https://i.ibb.co/86TVr70/IMG-20190623-130458.jpg)
### Wireframe en Figma
![Figma](https://i.ibb.co/9cXXfrv/mockup-Inicio.png)


## Test con usuarios
Luego de contar con el Wireframe con el modelo final, se le agregó funcionalidad al programa mediante ES6, Con el programa ya funcionando se realizaron test con posibles usuario para obtener feedback del diseño y funcionamiento.

### Testing

Al aplicar el testing a usuarios, nos encontramos con problemas con la recepción de los códigos de invitación, ya que al ingresarlo en la appweb se volvía complicado, esto en el caso de los usuarios-invitados. (NO aplica lo mismo para los anfitriones).
En primera instancia se pensaba entregar la invitación con el código a descrifrar en formato físico-papel, pero se detectó que no era práctico para el usuario, además de la posibles de perderlo o que se volviera ilegible. Por ello, se reformulo el concepto de entrega y se optó por entregarlo vía digital; para poder ser enviado vía whatsapp o email.

En la primera imagen observamos el testing con usuarios.

En la segunda imagen se muestra el primer prototipado de invitación en fomrato fisico y el final en formato digital.

Imagen 1.
![Probando con usuarios](https://i.ibb.co/b2zWzT0/In-Shot-20190623-131837648.jpg)
Imagen 2.
![invitación](https://i.ibb.co/hMxqM1j/In-Shot-20190623-132132568.jpg)

## Recursos de organización
Para la realización del proyecto se usaron diferentes herramientas para su organización y creación. A continuación te mencionamos las más utilizadas:
#### Trello
Fue la herramienta principal de organización, para llevar un control con orientación a la metodología Scrum.
![enter image description here](https://i.ibb.co/Bq3t0r4/trello.png)
#### Para el proceso de codificación, se utilizó [Atom](https://atom.io/).
#### Para el prototipado (sketching) se usó [Figma](https://www.figma.com/).
#### Para la realización del README.md se usó Stackedit.io.
#### Finalmente todo el proyecto esta trabajado y contenido desde GitHub [GitHub y GitHub Pages](https://guides.github.com/).
