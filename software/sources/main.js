led.enable(false);
music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground);

function xuat_du_lieu(b: number) {
  let j: number;

  if ((b >> 0) & 1)
    pins.digitalWritePin(DigitalPin.P1, 1);
  else
    pins.digitalWritePin(DigitalPin.P1, 0);

  if ((b >> 1) & 1)
    pins.digitalWritePin(DigitalPin.P2, 1);
  else
    pins.digitalWritePin(DigitalPin.P2, 0);

  if ((b >> 2) & 1)
    pins.digitalWritePin(DigitalPin.P3, 1);
  else
    pins.digitalWritePin(DigitalPin.P3, 0);

  if ((b >> 3) & 1)
    pins.digitalWritePin(DigitalPin.P4, 1);
  else
    pins.digitalWritePin(DigitalPin.P4, 0);

  if ((b >> 4) & 1)
    pins.digitalWritePin(DigitalPin.P5, 1);
  else
    pins.digitalWritePin(DigitalPin.P5, 0);

  if ((b >> 5) & 1)
    pins.digitalWritePin(DigitalPin.P6, 1);
  else
    pins.digitalWritePin(DigitalPin.P6, 0);

  if ((b >> 6) & 1)
    pins.digitalWritePin(DigitalPin.P7, 1);
  else
    pins.digitalWritePin(DigitalPin.P7, 0);

  if ((b >> 7) & 1)
    pins.digitalWritePin(DigitalPin.P8, 1);
  else
    pins.digitalWritePin(DigitalPin.P8, 0);

  if ((b >> 8) & 1)
    pins.digitalWritePin(DigitalPin.P9, 1);
  else
    pins.digitalWritePin(DigitalPin.P9, 0);

  if ((b >> 9) & 1)
    pins.digitalWritePin(DigitalPin.P10, 1);
  else
    pins.digitalWritePin(DigitalPin.P10, 0);

  if ((b >> 10) & 1)
    pins.digitalWritePin(DigitalPin.P11, 1);
  else
    pins.digitalWritePin(DigitalPin.P11, 0);

  if ((b >> 11) & 1)
    pins.digitalWritePin(DigitalPin.P12, 1);
  else
    pins.digitalWritePin(DigitalPin.P12, 0);

  if ((b >> 12) & 1)
    pins.digitalWritePin(DigitalPin.P13, 1);
  else
    pins.digitalWritePin(DigitalPin.P13, 0);

  if ((b >> 13) & 1)
    pins.digitalWritePin(DigitalPin.P14, 1);
  else
    pins.digitalWritePin(DigitalPin.P14, 0);

  if ((b >> 14) & 1)
    pins.digitalWritePin(DigitalPin.P15, 1);
  else
    pins.digitalWritePin(DigitalPin.P15, 0);

  if ((b >> 15) & 1)
    pins.digitalWritePin(DigitalPin.P16, 1);
  else
    pins.digitalWritePin(DigitalPin.P16, 0);
}

function chop_tat(b: number) {
  let k: number;

  for (k = 0; k < 20; k++) {
    xuat_du_lieu(b);
    b = ~b;
    basic.pause(100);
  }
}

function xep_dan(soled: number, xuoi: number) {
  let b: number;
  let a: number;
  let i: number;
  let l: number;

  b = 0;

  for (i = 0; i < soled + 1; i++) {
    a = b;

    for (l = 0; l < (soled + 1) - i; l++) {
      xuat_du_lieu(b);
      b = a;
      b |= (xuoi) ? 1 << (l - 1) : (1 << (soled - 1)) >> (l - 1);
      basic.pause(25);
    }
  }
}

function sang_dan_tat_dan(soled: number, sangdan: number, xuoi: number) {
  let c: number;
  let m: number;

  c = 0;

  for (m = 0; m < soled + 2; m++) {
    xuat_du_lieu(sangdan ? c : ~c);
    c |= (xuoi) ? (1 << (m - 1)) : (1 << (soled - 1)) >> (m - 1);
    basic.pause(25);
  }
}

function dich_sang(soled: number, xuoi: number) {
  let d: number;
  let n: number;

  d = 0;

  for (n = 0; n < soled + 5; n++) {
    xuat_du_lieu(d);
    d = (xuoi) ? (1 << (n - 1)) | (1 << (n - 2)) | (1 << (n - 3)) :
      ((1 << (soled - 1)) >> (n - 1)) | ((1 << (soled - 1)) >> (n - 2)) | ((1 << (soled - 1)) >> (n - 3));
    basic.pause(25);
  }
}

basic.forever(function() {
  xep_dan(16, 1);
  xep_dan(16, 0);
  for (let i: number = 0; i < 2; i++) {
    sang_dan_tat_dan(16, 1, 1);
    sang_dan_tat_dan(16, 0, 1);
    sang_dan_tat_dan(16, 1, 0);
    sang_dan_tat_dan(16, 0, 0);
  }
  for (let i: number = 0; i < 3; i++) {
    dich_sang(16, 1);
    dich_sang(16, 0);
  }
  chop_tat(0xFFFFFF);
  chop_tat(0x0F0F0F);
  chop_tat(0x333333);
  chop_tat(0x555555);
  xuat_du_lieu(0);
})