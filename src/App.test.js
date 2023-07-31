import { render, screen, fireEvent } from "@testing-library/react";
import { Booking } from "./components";
import BookingForm from "./components/content/BookingForm";

test("should render a text Little Lemon Booking", () => {
  render(<Booking />);
  const text = screen.getByText("Little Lemon Booking");
  expect(text).toBeInTheDocument();
});

test("should display and select available times", async () => {
  render(<BookingForm />);

  const dateSelect = screen.getByLabelText("Date*");
  fireEvent.change(dateSelect, { target: { value: "2023-07-08" } });

  const timeSelect = screen.getByLabelText("Time*");
  fireEvent.change(timeSelect, { target: { value: "18:30" } });
  expect(screen.getByDisplayValue("18:30")).toBeInTheDocument();
});
