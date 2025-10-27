import { toast } from "sonner";
import "./App.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { Button } from "./components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <div>
      {/* Button */}
      <Button
        onClick={() => {
          toast("입력이 완료되었습니다.", {
            position: "top-center",
          });
        }}
      >
        토스트 버튼
      </Button>
      <Button variant="destructive">버튼 2</Button>
      <Button variant="ghost">버튼</Button>
      <Button variant="link">버튼</Button>
      <Button variant="outline">버튼</Button>

      {/* Input */}
      <Input placeholder="입력을 하세요" />

      {/* TextArea */}
      <Textarea placeholder="입력하세요" />

      {/* Toaster */}
      <Toaster />

      {/* Carousel */}
      <Carousel className="mx-20">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">2 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">3 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">4 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">5 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">6 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">7 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">8 Slide</CarouselItem>
          <CarouselItem className="basis-1/3">9 Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious title="이전" />
        <CarouselNext title="다음" />
      </Carousel>

      {/* Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place Content</PopoverContent>
      </Popover>

      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog Description</DialogDescription>
          <div>Body | Body</div>
        </DialogContent>
      </Dialog>

      {/* Alert Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default App;

// Tailwind를 위한 확장 프로그램
// Tailwind CSS IntelliSense
