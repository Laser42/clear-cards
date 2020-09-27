import IClearCardRow from "./clear-card-row.interface";

interface IClearCard {
    title: string;
    rows: IClearCardRow[];
}
export = IClearCard;