import { UserProfile } from "./UserProfile";

export class UserProfileBuilder {
  private firstName?: string;
  private lastName?: string;
  private email?: string;
  private phone?: string;
  private address?: string;

  setFirstName(fn: string) { this.firstName = fn; return this; }
  setLastName(ln: string) { this.lastName = ln; return this; }
  setEmail(email: string) { this.email = email; return this; }
  setPhone(phone: string) { this.phone = phone; return this; }
  setAddress(addr: string) { this.address = addr; return this; }

  build(): UserProfile {
    if (!this.firstName || !this.lastName) {
      throw new Error("firstName and lastName are required");
    }
    return new UserProfile(this.firstName, this.lastName, this.email, this.phone, this.address);
  }
}
