import UserProfileForm from "@/components/@dashboard/user/user-profile-form/UserProfileForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <section className="px-10">
      <div
        className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 pb-10"
      >
        {/* Background  */}
        <div className="min-h-[30vh] w-full user-profile-bg opacity-80 z-0 rounded-t-2xl" />

        <div className="w-full py-5 flex justify-between items-center z-10 px-5 lg:px-10 relative -top-20 lg:-top-14">
          <div className="space-y-4">
            <img src="/assets/people/1.jpg" className="h-32 w-32 rounded-full object-cover outline-dashed outline-black outline-offset-8" alt="" />
            <h2 className="text-2xl font-medium">Amelia James</h2>
          </div>

          {/* Button */}
          <Button className="bg-blue-700 pointer-events-none">Profile</Button>
        </div>

        {/* User Profile Settings Form */}
        <div className="w-full px-5 lg:px-10 flex flex-col gap-5 lg:gap-0 lg:flex-row items-start justify-between">
          <div className="w-full lg:w-1/2 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Profile Settings</h2>
              <p className="text-neutral-500 text-sm">Update your profile details and preferences.</p>
            </div>

            {/* // Form */}
            <UserProfileForm />
          </div>

          {/* Something is coming section */}
          <div className="w-full lg:w-1/2 grid place-items-center animate-pulse">
            <Card className="w-full lg:w-2/3 bg-blue-600 shadow-lg shadow-neutral-300 text-white">
              <CardHeader>
                <CardTitle>Something is coming!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90">
                  We are currently working on a new feature, stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
