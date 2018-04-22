# tauJS

## API

## Countdown
<dl> 
  <dt>getSeconds()</dt>
  <dd></dd>
  <dt>setCallback(callback)</dt>
  <dd>set a callback and invoke it every second on start.</dd>
	<dt>setCallbackAt(callback, second)</dt>
  <dd>set a callback and invoke it at specified second on start.</dd>
	<dt>setSeconds(seconds)</dt>
  <dd></dd>
	<dt>start()</dt>
  <dd>starts the countdown.</dd>
	<dt>flush()</dt>
  <dd>reset the countdown and remove callbacks.</dd>
</dl>


### Usage
```javascript
var countdown = TAU.Countdown;
  countdown.setSeconds(10);
  countdown.setCallback(() => console.log(countdown.getSeconds()));
  countdown.setCallbackAt(() => console.log("My callback at 3rd second"), 3);
  countdown.start();
  countdown.flush();
```
