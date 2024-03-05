// ticket type objects
type ProblemOptions = {
    hardware?: "yes" | "no",
    software?: "yes" | "no",
    solvingStatus?: "done" | "undone"
    priorityStatus?: "low" | "mid" | "high"
}

type ProblemDescription = {
    id: string,
    title: string,
    description: string,
}

export type Ticket = ProblemOptions & ProblemDescription;

// Ticket Array Store
export let store: Ticket[] = [];
