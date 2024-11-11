import { Skeleton } from "@/components/ui/skeleton";

export default function Suspense() {
    return (
        <div className="space-y-2 mt-3 mb-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
        </div>
    )
}