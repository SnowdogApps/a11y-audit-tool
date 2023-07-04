export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      audits: {
        Row: {
          created_at: string
          id: number
          config: Json
          issues: Json | null
          profile_id: string
          project_id: number
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          config?: Json
          issues?: Json | null
          profile_id: string
          project_id?: number
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          config?: Json
          issues?: Json | null
          profile_id?: string
          project_id?: number
          status?: string | null
          updated_at?: string | null
        }
      }
      profile_project: {
        Row: {
          profile_id: string
          project_id: number
        }
        Insert: {
          profile_id: string
          project_id?: number
        }
        Update: {
          profile_id?: string
          project_id?: number
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_type: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_type?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_type?: string | null
          username?: string | null
        }
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type Profile = Database['public']['Tables']['profiles']['Row']
export interface ProfileWithEmail extends Profile {
  email: string
}