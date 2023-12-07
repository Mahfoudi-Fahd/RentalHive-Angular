export interface Demand {
    title?: string;
    description?: string;
    user?: {
      name: string;
      email: string;
      phoneNumber: string;
      role: string;
    };
    equipmentDemands: Array<{
      equipmentId: number;
      startDate: string;
      endDate: string;
    }>;
 
}