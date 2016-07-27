import {autoinject} from 'aurelia-framework';
import Moment = moment.Moment;

const DATE_FORMAT = 'MMM D, YYYY';

@autoinject()
export class Calculator {
    date:Moment = moment(new Date(2016,3,11));
    flowerLeadTimeDate:Moment;
    lightsOutDate:Moment;
    stickDate:Moment;
    quantity:number = 0;

    constructor(private element:Element) { }

    attached() {
        $('.calendar', this.element).calendar({
            type: 'date',
            onChange: (val:string) => {
                this.date = moment(val);
                this.flowerLeadTimeDate = this.date.clone().add(-4, 'days');
                this.lightsOutDate = this.flowerLeadTimeDate.clone().add(-3, 'weeks');
                this.stickDate = this.lightsOutDate.clone().add(-3, 'weeks');
            }
        });

        $('#customer').dropdown();
        $('#variety').dropdown();
        $('#size').dropdown();
    }

    get dateDisplay():string {
        return momentDisplay(this.date) || 'Choose Date';
    }

    get stickDateDisplay():string {
        return momentDisplay(this.stickDate);
    }

    get lightsOutDateDisplay() {
        return momentDisplay(this.lightsOutDate);
    }

    get flowerLeadTimeDisplay():string {
        return momentDisplay(this.flowerLeadTimeDate);
    }

    get flowerLeadTimeDuration():string {
        return '4 days';
    }

    get lightsOutDuration():string {
        return '3 weeks';
    }

    get shipDateDisplay():string {
        return momentDisplay(this.date);
    }
}

function momentDisplay(m:Moment):string {
    if(!m) return '';
    return `${m.format(DATE_FORMAT)} / (week ${m.isoWeek()})`;
}