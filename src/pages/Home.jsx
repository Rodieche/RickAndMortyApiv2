import { Tabs } from "keep-react";
import { Television, User, MapPin } from "phosphor-react";
import { Characters } from "./Characters";
import { Locations } from "./Locations";
import { Episodes } from "./Episodes";

export const Home = () => {
  return (
    <div className="flex items-center justify-center">
        <Tabs
        aria-label="Tabs"
        style="underline"
        borderPosition="bottom"
        iconPosition="left"
        >
        <Tabs.Item title="Characters" icon={<User size={20} />}>
            <Characters />
        </Tabs.Item>
        <Tabs.Item title="Locations" icon={<MapPin size={20} />}>
            <Locations />
        </Tabs.Item>
        <Tabs.Item title="Episodes" icon={<Television size={20} />}>
            <Episodes />
        </Tabs.Item>
        </Tabs>
    </div>
  )
}
