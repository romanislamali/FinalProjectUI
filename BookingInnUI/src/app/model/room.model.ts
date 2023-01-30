
import { RoomFacilities } from "./roomfacilities.model";
import { Roomtype } from "./roomtype.model";
import { Hotel } from "./hotel.model";

export class Room{
    
    rId: number | undefined;
    rTitle: string | undefined;
    rDescription: string | undefined;
    rRoomAddress: string | undefined;
    rAvailableRoom: string | undefined;
    rGallery: string | undefined;
    rRoomPrice: number | undefined;
    rDiscount: number | undefined;
    rAdultNumber: number | undefined;
    rChildrenNumber: number | undefined;
    rBedNumber: number | undefined;
    rRoomSize: number | undefined;
    rAvailability: number | undefined;
    rDetails: string | undefined;
    roomtype: string | undefined;
    hphoto: string | undefined;
   
    roomfacilities: RoomFacilities[] | undefined;
    roomtypes: Roomtype[] | undefined;
    hotel: Hotel[] | undefined;








}