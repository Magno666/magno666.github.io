# Coto Vedado

Juego de terror en primera persona para navegador. Un monte cerrado, de noche,
con niebla. Ocho balizas repartidas por los puestos del coto: enciéndelas todas,
sube a la torre del guardabosques, pide extracción y aguanta hasta que se abra
el portón.

**Jugar:** https://magno666.github.io/coto-vedado/

No hay nada que instalar. Todo el juego cabe en un único archivo HTML: la
geometría se genera con código y el sonido se sintetiza en el navegador, así que
no se descarga ni una imagen ni un audio.

## Controles

| | |
|---|---|
| `WASD` | Moverse |
| `Shift` | Correr — hace mucho ruido |
| `Ctrl` / `C` | Agacharse — casi no hace ruido |
| `F` | Linterna — sin pila |
| Clic mantenido | Enfocar el haz |
| `E` | Encender baliza |
| `M` | Mapa |

En móvil: joystick a la izquierda, arrastrar para mirar, botones a la derecha.

**Sube el volumen.** Las bestias suenan con audio espacial: oyes por qué lado
te vienen. Cuando el bosque se calla de golpe, es que algo se ha acercado.

## Adrenalina

Con una bestia a menos de veinte metros corres más y aguantas más, pero el
aliento se quema mucho más deprisa. Sirve para escapar, no para viajar.

## Las tres bestias

- **El Alto** castiga *mirar*. Quieto mientras lo veas, pero te funde la cordura.
  Apartas los ojos y salta más cerca.
- **La Jauría** castiga *correr y dejarte ver*. Cazan por vista y por oído.
  Agáchate y apaga la linterna y dejan de verte al instante.
- **El Ciego** castiga *moverte*. Ciego total, sólo oye — más lento que tú
  andando, pero con un oído larguísimo. El agacharte no le afecta, sólo el
  ruido. Hay un medidor de ruido en el HUD.

---

Esta es la versión de un jugador. El modo cooperativo de 2 a 6 existe, pero
necesita un servidor Node y no cabe en una página estática.
