import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const PlotnostCvetTable = ({
  data,
  title,
  firstHead,
}: {
  data: string[][];
  title: string;
  firstHead: string;
}) => {
  return (
    <Table className="mt-6">
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-md font-semibold">{firstHead}</TableHead>
          <TableHead className="text-center text-md font-semibold">
            Плотность ρ
          </TableHead>
          <TableHead className="text-center text-md font-semibold">К</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-md">{row[0]}</TableCell>
            <TableCell className="font-medium text-md text-center">
              {row[1]}
            </TableCell>
            <TableCell className="font-medium text-md text-center">
              {row[2]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlotnostCvetTable;
