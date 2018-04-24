# tauJS

## API

## Countdown
### Methods
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


## VirtualContainer
### Properties
<dl> 
  <dt>x</dt>
  <dd></dd>
  <dt>y</dt>
  <dd></dd>
   <dt>width</dt>
  <dd></dd>
   <dt>height</dt>
  <dd></dd>
   <dt>columns</dt>
  <dd>default: 0</dd>
</dl>

### Methods
<dl> 
  <dt>constructor()</dt>
    <dd></dd>
  <dt>setWidth(width)</dt>
    <dd></dd>
  <dt>setHeight(height)</dt>
    <dd></dd>
  <dt>addChildInRow(child, row)</dt>
    <dd></dd>
  <dt>hAlignRow(row)</dt>
    <dd></dd>
  <dt>vAlignRows()</dt>
    <dd></dd>
  <dt>enableVisualDebug(color)</dt>
    <dd></dd>
  <dt>disableVisualDebug()</dt>
    <dd></dd>
</dl>

## Button
### Methods
<dl> 
  <dt>constructor(default_texture)</dt>
    <dd></dd>
  <dt>setInteractivity(v)</dt>
    <dd>v: boolean</dd>
  <dt>enable()</dt>
    <dd></dd>
  <dt>disable</dt>
    <dd></dd>
   <dt>setTexture(state, texture)</dt>
    <dd></dd>
  <dt>on(event, callback)</dt>
    <dd>events: pointerdown, pointerup, pointerupoutside, pointerover, pointerout</dd>
</dl>

### Usage
```javascript
var b = new TAU.Button(texture)
  .setInteractivity(true);
  .setTexture('down', downTexture)
  .setTexture('over', overTexture)
  .setTexture('off', overTexture)
  .on('pointerdown', doSomeOnDown)
  .on('pointerup', doSomeOnUp)
  .on('pointerover', doSomeOnOver)
  .on('pointerout', doSomeOnOut)
```
