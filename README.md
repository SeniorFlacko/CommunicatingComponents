# Tienda

<h2> Comunicacion Padre - Hijo</h2>
Dado un Componente Padre y un componente hijo sea que el Hijo este contenido en el padre mediante su selector

Podemos pasar data de Padre a Hijo si declaramos una variable @Input() en el Hijo 

De tal manera que esta sera pasada a traves de los atributos del selector o directiva que esta contenida en el Padre

<pre>
  Declaramos la siguiente directiva y la inyectamos en el HTML del padre : 
  

   app-parques [nombre]="nombreDelParque" [metros]="7431"   /app-parques
  
 
  Donde nombre , metros son declaradas en el TS del componente Hijo:
  
  export class HijoComponent implements OnInit{
    @Input() nombre;
    @Input() metros: number;
    
    ...
    
  }
  
  Entonces nombre esta ligado a nombreDelParque que es una variable del Componente Padre
  
  export class PadreComponent implements OnInit {
    public nombreDelParque: string;

    ...
  }
  
  De  esta manera se comunica el Padre al Hijo mediante una variable "Compartida"
  
  
  Asi pues Ligamos una variable del Padre a una del Hijo.

</pre>

<h2> Comunicacion Hijo Padre </h2>


<pre>

  Declaramos una variable de tipo Output la cual es una instancia de un EventEmitter
  
  export class HijoComponent implements OnInit {
  
   @Output() eventoDetonador = new EventEmitter();
   
   ...
  }

  Luego inyectamos ese evento como atributo en la directiva Hija que se encuentra en el HTML del Padre
  
  app-parques (eventoDetonador)="metodoPadreRecibidor($event)" /app-parques
  
  Entonces:
  
  Configuramos un boton detonador del evento 
  
  button (click)="enviarAlPadre() Enviar al padre! /button
  
  Donde enviarAlPadre emite un Objeto:
  
  export class PadreComponent implements OnInit {
  
 
    @Output() eventoDetonador = new EventEmitter();
    ...
    
    enviarAlPadre() {
      this.eventoDetonador.emit({
        'nombre': this.nombre,
        'metros': this.metros,
        'vegetacion': this.vegetacion,
        'abierto': this.abierto
      });
    }
    
    
  }
  
  El objeto que mandamos con emit llega a traves del parametro $event de metodoPadreRecibidor($event)
  
  Donde el Padre decidira que hacer con ese Objeto
  
  export class PadreComponent implements OnInit {
    public objeto: string;

    metodoPadreRecibidor($event) {
      this.objeto = $event;
    }
  }


  Asi pues enviamos un objeto desde el Hijo al Padre
</pre>

