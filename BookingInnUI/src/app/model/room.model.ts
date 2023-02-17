import { Hotel } from "./hotel.model";

export class Room{
    

        rid: number | undefined;
        rstatus: number | undefined;
        rnumber: number | undefined;
        rdetails: string | undefined;
        rgallery: string | undefined;
        rprice: number | undefined;
        rdiscount: number | undefined;
        radultcapacity: number | undefined;
        rchildcapacity: number | undefined;
        rtotalbed: number | undefined;
        rsize: number | undefined;
        hotel: number | undefined;
        roomtype: number | undefined;
        roomfacilities: number | undefined;

        hid_fk:number | undefined;
        // hotels : Hotel[] | undefined;




}