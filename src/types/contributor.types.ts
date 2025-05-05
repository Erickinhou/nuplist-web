export type Contribution = {
  name: string;
  contribution_value: {
    initial: number;
    monthly: {
      value: number;
      interest_rate: number;
    };
  };
};

export type Contributor = {
  person_name: string;
  contribution: Contribution[];
}; 