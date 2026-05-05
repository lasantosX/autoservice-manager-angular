export interface ServiceOrder {
  serviceOrderId: number;
  vehicleId: number;
  orderNumber: string;
  status: number;
  openedAtUtc: string;
  closedAtUtc: string | null;
  totalLaborAmount: number;
  totalPartsAmount: number;
  totalAmount: number;
}
