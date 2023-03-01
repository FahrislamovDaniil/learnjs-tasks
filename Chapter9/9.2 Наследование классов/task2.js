class ExtendedClock extends Clock {
    constructor(template) {
        super(template);
        if (template.precision || template.precision == 0) {
            this.precision = template.precision;
        } else {
            this.precision = 1000;
        }
    }
  
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}