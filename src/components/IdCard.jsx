function IdCard(props) {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Smith"
        firstName="Alice"
        gender="female"
        height={165}
        birth={new Date("1995-03-20")}
        picture="https://randomuser.me/api/portraits/women/12.jpg"
      />

      <IdCard
        lastName="Johnson"
        firstName="Michael"
        gender="male"
        height={182}
        birth={new Date("1984-09-02")}
        picture="https://randomuser.me/api/portraits/men/28.jpg"
      />

      <IdCard
        lastName="Williams"
        firstName="Olivia"
        gender="female"
        height={170}
        birth={new Date("1998-11-15")}
        picture="https://randomuser.me/api/portraits/women/60.jpg"
      />

      <IdCard
        lastName="Brown"
        firstName="William"
        gender="male"
        height={175}
        birth={new Date("1990-12-08")}
        picture="https://randomuser.me/api/portraits/men/83.jpg"
      />
    </div>
  );
}

export default IdCard;
