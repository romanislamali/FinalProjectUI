
import { Room } from "./room.model";
import { Location } from "./location.model";
import { Inventory } from "./inventory.model";

export class Booking{
bid:number | undefined;
bTitle:string | undefined;
bAvailableRoom:string | undefined;
bType:string | undefined;
bDate:string | undefined;
bookedroom:string | undefined;
bComment:string | undefined;
trakingNumber:string | undefined;

room: Room[] | undefined;
location: Location[] | undefined;
inventory: Inventory[] | undefined ;

}

