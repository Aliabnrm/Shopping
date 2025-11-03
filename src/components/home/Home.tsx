import Container from "../container/Container";

function Home() {
  return (
    <div>
      <Container>
        <div className="mt-4 flex w-full min-h-screen flex-col gap-4 p-4 rounded-lg bg-gray-100 shadow-xl">
          <div className="grid-cols-4">
            <h1>Collection</h1>
          </div>
          <div className="flex justify-end items-end w-full">
            <img
              className="m-auto rounded-b-lg"
              src="https://www.zibamoon.com/Files/Thumbs/2021/3/3/%D8%A7%D8%B3%D8%AA%D8%A7%DB%8C%D9%84-%D9%BE%D8%B3%D8%B1%D8%A7%D9%86%D9%87-%D9%88-%D9%85%D8%B1%D8%AF%D8%A7%D9%86%D9%87-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B9%DB%8C%D8%AF-1400.webp"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
