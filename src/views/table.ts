import {autoinject} from 'aurelia-framework';
import Moment = moment.Moment;

const DATE_FORMAT = 'MMM D, YYYY';

@autoinject()
export class Calculator {
    date:Moment = moment(new Date(2016,4,6));
    flowerLeadTimeDate:Moment;
    lightsOutDate:Moment = moment(new Date(2016,3,6));
    stickDate:Moment;
    moveLightsOut:boolean = false;
    partialSpace:boolean = false;

    constructor(private element:Element) { }

    attached() {
        var that = this;
        $('.ui.ribbon.label', this.element).calendar({
            type: 'date',
            onChange: function(val:string) {
                if($(this).hasClass('lights-out')) {
                    that.moveLightsOut = !that.moveLightsOut;
                    that.lightsOutDate = moment(new Date(2016,3,13));
                }
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