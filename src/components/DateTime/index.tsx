import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate, timestampToTime } from "../../utils/DateUtils";

import { Container, Label, DateContainer, DateText } from "./styles";

type DateTimeProps = {
  date: Date | number;
  setDate: (date: any) => void;
  label: string;
  isTime?: boolean;
};

const DateTime: React.FC<DateTimeProps> = ({
  date,
  setDate,
  label,
  isTime,
}) => {
  console.log(date);
  const [currentDate, setCurrentDate] = React.useState<Date>(
    isTime ? new Date(date) : new Date(date)
  );
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <DateContainer onPress={() => setDatePickerVisibility(true)}>
        <DateText>
          {isTime
            ? timestampToTime(currentDate.getTime())
            : formatDate(currentDate)}
        </DateText>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={isTime ? "time" : "date"}
          onConfirm={(date) => {
            setCurrentDate(date);
            setDate(date);
            setDatePickerVisibility(false);
          }}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </DateContainer>
    </Container>
  );
};

export default DateTime;
