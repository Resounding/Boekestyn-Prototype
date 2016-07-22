import {autoinject} from 'aurelia-framework';

const DATE_FORMAT = 'MMM d, YYYY';

@autoinject()
export class Calculator {
    date:Date;
    stickDate:Date;
    lightsOutDate:Date;

    constructor(private element:Element) { }

    attached() {
        $('.calendar', this.element).calendar({
            type: 'date',
            onChange: (val:string) => {
                const m = moment(val);
                if(!m.isValid()) {
                    this.date = null;
                } else {
                    this.date = m.toDate();
                    this.stickDate = m.clone().add(3, 'weeks').toDate();
                    this.lightsOutDate = m.clone().add(6, 'weeks').toDate();
                }

            }
        });

        $('#customer').dropdown();
        $('#variety').dropdown();
        $('#size').dropdown();
    }

    get dateDisplay() {
        if(!this.date) return 'Choose Date';

        return moment(this.date).format(DATE_FORMAT);
    }

    get stickDateDisplay() {
        if(!this.stickDate) return '';
        return `${moment(this.stickDate).format(DATE_FORMAT)} / week ${moment(this.stickDate).isoWeek()}`;
    }

    get lightsOutDateDisplay() {
        if(!this.lightsOutDate) return '';
        return `${moment(this.lightsOutDate).format(DATE_FORMAT)} / week ${moment(this.lightsOutDate).isoWeek()}`;
    }
}