const int  buttonPin = A0;    // the pin that the pushbutton is attached to
const int ledPin = 13;
int buttonState=0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState=digitalRead(buttonPin);
  if(buttonState==1){
    digitalWrite(ledPin,HIGH);
    }else{
      digitalWrite(ledPin,LOW);
    }
  

}
