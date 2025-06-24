import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Badge } from "./ui/badge";

export type BreadcrumbProps = {
  items: Array<{
    label: string;
    href: string;
  }>;
};

export function BreadCrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <Fragment key={item.label}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Badge
                    className="text-sm max-w-[150px] truncate inline-block align-middle"
                    title={item.label}
                  >
                    {item.label}
                  </Badge>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </Fragment>
          ) : (
            <Fragment key={item.label}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
